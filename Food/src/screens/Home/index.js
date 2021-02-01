import React, { Component } from 'react';
import { SafeAreaView, Image, View, ImageBackground, Text, TouchableOpacity, FlatList } from 'react-native'

// import components
import styles from './styles';
import { Color, Constants } from "../../common/styles";
import { dateTimeData } from "../../common/helper/dateTimeData.json";
import { screenWidth } from "../../common/helper";

const VIEWABILITY_CONFIG = {
    viewAreaCoveragePercentThreshold: 90,
    waitForInteraction: true,
};

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currntIndex: 0,
            currentTimeIndex: 0
        }
    }

    _onViewableItemsChanged = (info) => {
        this.setState({ currntIndex: info.changed[0].index, currentTimeIndex: 0 });
    }

    render() {
        const { currntIndex, currentTimeIndex } = this.state;
        return (
            <SafeAreaView style={styles.mainView}>
                <View style={{ justifyContent: 'flex-end', flex: 1 }}>
                    <View style={styles.dateView}>
                        <FlatList
                            data={dateTimeData}
                            horizontal
                            contentContainerStyle={{ alignItems: "center", }}
                            ref={(ref) => { this.flatListRef = ref; }}
                            style={{ width: screenWidth }}
                            onViewableItemsChanged={this._onViewableItemsChanged}
                            showsHorizontalScrollIndicator={false}
                            viewabilityConfig={VIEWABILITY_CONFIG}
                            pagingEnabled
                            renderItem={({ item, index }) => (
                                <View>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={styles.dayDateView}>
                                        <Text style={[styles.dayText,{color: index === currntIndex ? Color.YELLOW: Color.WHITE}]}>{item.day}</Text>
                                        <Text style={[styles.dateText,{color: index === currntIndex ? Color.YELLOW: Color.WHITE}]}>{item.title}</Text>
                                    </View>
                                </View>
                                </View>
                            )}
                        />
                        
                    </View>
                    <View style={styles.lineView} />
                    <View style={styles.separeterView} />
                    <View style={styles.timeView}>
                        <FlatList
                            data={dateTimeData[currntIndex].time}
                            style={{ width: "100%", flex: 1 }}

                            renderItem={({ item, index }) => (
                                <TouchableOpacity style={[styles.selectedTimeView,{backgroundColor: currentTimeIndex === index ? Color.YELLOW : "transparent"}]} 
                                                  onPress={() => {this.setState({ currentTimeIndex: index })}}>
                                    <Text style={{ fontSize: 16, fontWeight: "700", color: currentTimeIndex === index ? Color.DARKBLUE : Color.WHITE  }}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />

                    </View>
                    <View style={styles.estimatedView}>
                        <Text style={{ fontSize: 13, color: "#646E94" }}>Estimated Arrival To Destination</Text>
                        <Text style={{ fontSize: 16, fontWeight: "700", color: Color.WHITE }}>12:30 PM - 1:00 PM</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonView}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Schedule</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}
