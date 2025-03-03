import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

export default function CategoryGridTile({title, color, onPress}) {
    return (
        <View style={styles.gridItem}>
            <Pressable onPress={() => onPress(title)} style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]} 
            android_ripple={{color: '#ccc'}}>
                <View style={[styles.innerContainer,  {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        overflow: Platform.OS=== 'android' ? 'hidden' : 'visible', // so that ripple effect now go beyond the rounded corner
        // But this also remove the ripple effect for ios. So we use Platform API
        // for ios Ripple effect
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
});