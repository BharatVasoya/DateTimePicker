import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

import { Matrics, Constants, Color } from "../../common/styles";
import styles from './styles';
import images from '../../common/helper/Images';
import { TextComponent } from '..';

class ItemComponent extends React.Component {
  render() {
    const btnTextStylesArray = [];

    const {
      item,
      itemIndex,
    } = this.props;

    btnTextStylesArray.push({
      fontFamily: Constants.FONT_MEDIUM,
      // fontSize: Constants.SMALL,
    });

    return (
      <View style={styles.touchableOpacity} onPress={() => { }}>
        <Image
          resizeMode='cover'
          style={{ height: Matrics.ScaleValue(80), borderTopLeftRadius: Matrics.ScaleValue(5), borderTopRightRadius: Matrics.ScaleValue(5) }}
          source={{ uri: item.image ? item.image : images.EVENT_IMAGE }}
        />

        <View style={{ backgroundColor: Color.WHITE_LIGHT, marginTop: '2%', borderRadius: Matrics.ScaleValue(2), alignItems: 'center' }}>
          <TextComponent singleLine={true} color={'#4892a0'} style={btnTextStylesArray} normal regularFont children={item.name} />
        </View>
      </View>
    )
  }
}
export default ItemComponent;
