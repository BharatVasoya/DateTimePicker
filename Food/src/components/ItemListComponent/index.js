import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, FlatList, ScrollView } from 'react-native';

import { Matrics, Constants, Color } from "../../common/styles";
import styles from './styles';
import images from '../../common/helper/Images';
import { TextComponent, ItemComponent, NoResultComponent } from '..';

class ItemListComponent extends React.Component {
  render() {
    
    const {
      item,
      itemIndex,
    } = this.props;

    return (
      <View style={{ margin: Matrics.ScaleValue(20), marginBottom: 0, backgroundColor: '#2a424a' }}>
        <TextComponent mbottom={10} mleft={10} mtop={10} singleLine={true} color={Color.WHITE}  />
        <ScrollView horizontal={true} style={styles.touchableOpacity}>
          <View style={{ width: '100%', flexDirection: 'row' }}>
            {item.categories.map((item, index) => {
              return (
                <ItemComponent
                  key={index}
                  item={item}
                  itemIndex={index}
                />
              )
            })}

          </View>
        </ScrollView>
      </View>
    )
  }
}
export default ItemListComponent;
