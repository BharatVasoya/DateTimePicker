import React, { Component } from 'react';
import { View, Image, SafeAreaView } from 'react-native'
import { CommonActions } from '@react-navigation/native'

// import components
import styles from './styles'
import images from '../../common/helper/Images'
import { TextComponent } from '../../components'

export default class Splash extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.goToNextView('Home')
          }, 2000)
    }

    goToNextView = (nextView = null) => {
        this.props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: nextView }],
            }),
        )
        return
    }

    render() {
        return (
            <SafeAreaView style={styles.info}>
            </SafeAreaView>
        )
    }
}
