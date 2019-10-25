import React, {Component} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

class AllNotesView extends Component {
    //static navigationOptions = ({navigation}: Props) => ({
    //    
    //});

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <ScrollView style={styles.scrollView}>
                    <Text>All Notes Screen</Text>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: 'white', 
        flex: 1,
    },
    scrollView: {
      backgroundColor: 'white',
    },
})

export default AllNotesView;