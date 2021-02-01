import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Color } from '../../common/styles';
import { screenWidth } from "../../common/helper";

export default (styles = {
  mainView: {
    flex: 1, 
    backgroundColor: Color.BLUE
  },
  dateView: {
    backgroundColor: Color.LIGHTBLUE, 
    height: 100, 
    justifyContent: "center", 
    alignItems: "center", 
    flexDirection: "row",
  },
  dayDateView: {
    height: 40, 
    justifyContent: "center", 
    alignItems: "center", 
    width: screenWidth
  },
  dayText: {
    fontSize: 20, 
    fontWeight: "700",
  },
  dateText: { 
    fontSize: 16, 
    fontWeight: "600", 
    marginTop: 5 
  },
  lineView: {
    height: 2, 
    width: screenWidth / 2, 
    backgroundColor: Color.YELLOW, 
    alignSelf: "center"
  },
  separeterView: { 
    backgroundColor: Color.DARKBLUE, 
    justifyContent: "center", 
    alignItems: "center", 
    height: 40 
  },
  timeView: { 
    backgroundColor: Color.DARKBLUE, 
    justifyContent: "center", 
    alignItems: "center", 
    height: 150 
  },
  selectedTimeView: {
    height: 50, 
    justifyContent: "center", 
    alignItems: "center", 
    width: "100%",
  },
  estimatedView: { 
    backgroundColor: "#2C3368", 
    height: 80, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  buttonView: { 
    backgroundColor: Color.YELLOW, 
    height: 60, 
    justifyContent: "center", 
    alignItems: "center" 
  }
});
module.exports = styles;
