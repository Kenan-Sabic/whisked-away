import React from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Browse_search from '../components/BrowseSearchBanner';
import Filters from '../components/Filters';
import Recipes from '../components/Recipes';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import axios from 'axios';
const Browse = () => {
	const [filters, setMyFilters] = useState([]);

	const [recipes, setRecipes] = useState([]);
	const [users, setUsers] = useState([]);
	useEffect(() => {
		const getRecipesAndUsers = async () => {
			axios.get('http://localhost:4000/api/recipe').then(response => {
				setRecipes(response.data);
			});
			//get all users
			axios.get('http://localhost:4000/api/user').then(response => {
				setUsers(response.data);
			});
		};
		getRecipesAndUsers();
	}, []);

	//function that removes recipes from the list if they don't match the filters
	const filterRecipes = () => {
		//if there are no filters, return all recipes
		if (filters.length === 0) {
			return recipes;
		}
		//otherwise, filter the recipes
		else {
			//create a new array to store the filtered recipes
			let filteredRecipes = [];
			//loop through all tags in the recipes
			recipes.forEach(recipe => {
				//loop through all filters
				filters.forEach(filter => {
					//if the recipe has the filter, add it to the filtered recipes
					if (recipe.tags.includes(filter)) {
						filteredRecipes.push(recipe);
					}
				});
			});
			//return the filtered recipes
			return filteredRecipes;
		}
	};

	const addFilter = filter => {
		setMyFilters([...filters, filter]);
	};
	const removeFilter = filter => {
		setMyFilters(filters.filter(f => f !== filter));
	};

	return (
		<div>
			<Navbar />
			<Browse_search />
			<Filters handleFilter={addFilter} removeFilter={removeFilter} filters={filters} />
			<Recipes recipes={filterRecipes()} users={users} />
			<Footer />
		</div>
	);
};

export default Browse;
