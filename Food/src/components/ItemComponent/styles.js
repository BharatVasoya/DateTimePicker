import { Matrics, Fonts, Color } from "../../common/styles";
export default (styles = {
  touchableOpacity: {
    width: '50%',
    flexDirection: 'column',
    borderRadius: Matrics.ScaleValue(10),
    marginHorizontal: Matrics.ScaleValue(10),
    // marginRight: Matrics.ScaleValue(10),
    shadowColor: Color.GREY,
    // backgroundColor: Color.WHITE,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: Matrics.ScaleValue(2),
    elevation: Matrics.ScaleValue(4),
    paddingBottom: Matrics.ScaleValue(5),
    borderWidth: 2,
    borderColor: '#4892a0',
  },
  selectedButtonStyle: {
    backgroundColor: 'black',
    borderRadius: Matrics.ScaleValue(5),
    width: Matrics.ScaleValue(70),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Matrics.ScaleValue(5),
    marginHorizontal: Matrics.ScaleValue(5),
  },
});
module.exports = styles;
