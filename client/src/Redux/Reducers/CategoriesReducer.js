import * as CategoriesConstants from '../Constants/CategoriesConstants'

// Get all categories
export const getAllCategoriesReducer = (state = {categories : []}, action) => {
    switch (action.type){
        case CategoriesConstants.GET_ALL_CATEGORIES_REQUEST: return {isLoading: true, categories: []}
        case CategoriesConstants.GET_ALL_CATEGORIES_SUCCESS: return {isLoading: false, categories: action.payload}
        case CategoriesConstants.GET_ALL_CATEGORIES_FAIL: return {isLoading: true, isError: action.payload}
        default: return state
    }
}

// Create category
export const createCategoryReducer = (state = {}, action) => {
    switch(action.type){
        case CategoriesConstants.CREATE_CATEGORY_REQUEST: return {isLoading: true}
        case CategoriesConstants.CREATE_CATEGORY_SUCCESS: return {isLoading: false, isSuccess: true}
        case CategoriesConstants.CREATE_CATEGORY_FAIL: return {isLoading: true, isError: action.payload}
        case CategoriesConstants.CREATE_CATEGORY_RESET: return {}
        default: return state
    }
}

// Update category
export const updateCategoryReducer = (state = {}, action) => {
    switch(action.type){
        case CategoriesConstants.UPDATE_CATEGORY_REQUEST: return {isLoading: true}
        case CategoriesConstants.UPDATE_CATEGORY_SUCCESS: return {isLoading: false, isSuccess: true}
        case CategoriesConstants.UPDATE_CATEGORY_FAIL: return {isLoading: true, isError: action.payload}
        case CategoriesConstants.UPDATE_CATEGORY_RESET: return {}
        default: return state
    }
}

// Delete category
export const deleteCategoryReducer = (state = {}, action) => {
    switch(action.type){
        case CategoriesConstants.DELETE_CATEGORY_REQUEST: return {isLoading: true}
        case CategoriesConstants.DELETE_CATEGORY_SUCCESS: return {isLoading: false, isSuccess: true}
        case CategoriesConstants.DELETE_CATEGORY_FAIL: return {isLoading: true, isError: action.payload}
        case CategoriesConstants.DELETE_CATEGORY_RESET: return {}
        default: return state
    }
}