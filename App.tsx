import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
	const onPress = () => {
		console.log('hello');
	};
	return (
		<View style={styles.container}>
			<Text>안녕하세요</Text>
			<Text style={styles.button}>정민재 입니다.</Text>
			<View>
				<Button onPress={onPress} title="button"></Button>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		fontSize: 20,
		color: 'red',
	},
});
