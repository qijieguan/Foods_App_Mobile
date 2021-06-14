import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Category = ({ onSelect }) => {
    return (
        <View style={styles.categoryList}>
            <TouchableOpacity style={styles.categoryView} onPress={() => onSelect("all")}>
                <Text style={styles.categoryText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryView} onPress={() => onSelect("burger")}>
                <Text style={styles.categoryText}>Burger</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryView} onPress={() => onSelect("side")}>
                <Text style={styles.categoryText}>Side</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryView} onPress={() => onSelect("beverage")}>
                <Text style={styles.categoryText}>Beverage</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    categoryList: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    categoryView: {
        marginLeft: 8,
        marginRight: 8,
        height: 65,
        width: 65,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'crimson',
        justifyContent: 'center',
    },
    categoryText: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    }
});

export default Category;