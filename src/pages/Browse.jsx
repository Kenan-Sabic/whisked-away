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
	const [filters, setFilters] = useState([]);
	const [search, setSearch] = useState('');
	const [recipes, setRecipes] = useState([]);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getRecipesAndUsers = async () => {
			const recipeResponse = await axios.get('http://localhost:4000/api/recipe');
			setRecipes(recipeResponse.data);

			const userResponse = await axios.get('http://localhost:4000/api/user');
			setUsers(userResponse.data);
		};

		getRecipesAndUsers();
	}, []);

	const filterRecipes = () => {
		if (filters.length === 0 && search === '') {
			return recipes;
		}

		let filteredRecipes = recipes.filter(recipe => {
			let filterMatch = true;

			if (filters.length > 0) {
				filterMatch = filters.some(filter => recipe.tags.includes(filter));
			}

			const searchMatch = recipe.name.toLowerCase().includes(search.toLowerCase());

			return filterMatch && searchMatch;
		});

		return filteredRecipes;
	};

	const addFilter = filter => {
		setFilters(prevFilters => [...prevFilters, filter]);
	};

	const removeFilter = filter => {
		setFilters(prevFilters => prevFilters.filter(f => f !== filter));
	};

	const handleSearch = search => {
		setSearch(search);
	};

	return (
		<div>
			<Navbar />
			<Browse_search handleSearch={handleSearch} />
			<Filters handleFilter={addFilter} removeFilter={removeFilter} filters={filters} />
			<Recipes recipes={filterRecipes()} users={users} />
			<Footer />
		</div>
	);
};

export default Browse;
