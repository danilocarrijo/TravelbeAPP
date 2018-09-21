import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { ListView, Text, FlatList, StyleSheet,View } from 'react-native';

class PostIndex extends Component {

    componentDidMount() {
        this.props.fetchPost();
    }
    renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text>{item.title}</Text>
        </View>
    );

    render() {

        const { repos } = this.props;
        console.log(Object.keys(repos).length)
        if (Object.keys(repos).length != 0 ) {
            return (
                <FlatList
                    styles={styles.container}
                    data={repos}
                    renderItem={this.renderItem}
                />
            );
        } else { 
            return <Text> wait ... </Text>
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});


const mapStateToProps = state => {
    return {
        repos: state.posts
    };
};

export default connect(mapStateToProps, { fetchPost })(PostIndex);