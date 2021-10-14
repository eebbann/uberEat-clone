import React, { useState } from "react";
import { SafeAreaView, Text, View,ScrollView } from "react-native"; 
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestauranItem, { localRestaurants } from "../components/RestauranItem";
import SearchBar from "../components/SearchBar";

const Home = () => {
	const [restaurantData, setRestaurantData]= useState(localRestaurants)
	return (
		<SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
			<View style={{ backgroundColor: "white", padding: 15 }}>
				<HeaderTabs />
				<SearchBar />
			</View>
			<ScrollView showVerticalScrollIndicator = {false} >
				<Categories />
	      <RestauranItem  restaurantData={restaurantData}/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
