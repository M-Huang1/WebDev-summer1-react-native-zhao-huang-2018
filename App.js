import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Header from "react-native-elements/src/header/Header";
import QuestionTypePicker from "./elements/Picker";
import CourseList from "./Components/CourseList";
import {createStackNavigator} from "react-navigation";
import ModuleList from "./Components/ModuleList";
import LessonList from "./Components/LessonList";

const App = createStackNavigator({
    CourseList,
    ModuleList,
    LessonList
});

export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
