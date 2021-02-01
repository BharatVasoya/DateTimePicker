import { Matrics, Fonts, Color } from "../../common/styles";
export default (styles = {
  touchableOpacity: {
    flexDirection: 'column',
    shadowColor: Color.GREY,
    paddingRight: Matrics.ScaleValue(50),
    paddingBottom: Matrics.ScaleValue(20),
  },
  selectedButtonStyle: {
    backgroundColor: 'black',
    width: Matrics.ScaleValue(70),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Matrics.ScaleValue(5),
    marginHorizontal: Matrics.ScaleValue(5),
  },
});
module.exports = styles;
