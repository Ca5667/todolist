import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./TabBottomMenu.style";
export function TabBottomMenu({selectedTabName, onPress, todoList}) {
    const countbyStatus = todoList.reduce(
        (acc, todo) => {
            todo.isCompleted ? acc.done++ : acc.inProgress++;
        return acc;
    },
     {all: todoList.length, inProgress: 0, done: 0, }
    );
    // console.log(countbyStatus);
    function getTextStyle(tabName){
        return{ 
            paddingVertical:20,
            fontSize:16,
            fontWeight:"bold",
            color : tabName===selectedTabName ? "#2F76E5" : "#c2c2c2c2", 
        };
    }
  return(
  <View style = { s.container }>
    <TouchableOpacity onPress={()=> onPress("all")}>
      <Text style={getTextStyle("all")}>All ( {countbyStatus.all} )</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> onPress("inProgress")}>
      <Text style={getTextStyle("inProgress")}>In Progress ( {countbyStatus.inProgress} )</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> onPress("done")}>
      <Text style={getTextStyle("done")}>Done ( {countbyStatus.done} )</Text>
    </TouchableOpacity>
  </View>
  );
}
