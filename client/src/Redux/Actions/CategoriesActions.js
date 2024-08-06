import * as CategoriesConstants from '../Constants/CategoriesConstants'
import * as categoriesAPIs from '../APIs/CategoriesServices'
import toast from 'react-hot-toast'
import {ErrorsAction, tokenProtetion} from '../Protection'

// Get all categories action
export const getAllCategoriesAction = () => async (dispatch) => {
    try  {
        dispatch({type: CategoriesConstants.GET_ALL_CATEGORIES_REQUEST})
        const data = await categoriesAPIs.getCategoriesService()
        dispatch({type: CategoriesConstants.GET_ALL_CATEGORIES_SUCCESS, payload: data})
    }catch (error){
        ErrorsAction(error, dispatch, CategoriesConstants.GET_ALL_CATEGORIES_FAIL)
    }
}

// Create category action
export const createCategoryAction = (title) => async (dispatch, getState) => {
    try  {
        dispatch({type: CategoriesConstants.CREATE_CATEGORY_REQUEST})
        await categoriesAPIs.createCategoryService(title, tokenProtetion(getState))
        dispatch({type: CategoriesConstants.CREATE_CATEGORY_SUCCESS})
        toast.success("Category created successfully")
        dispatch(getAllCategoriesAction())
    }catch (error){
        ErrorsAction(error, dispatch, CategoriesConstants.CREATE_CATEGORY_FAIL)
    }
}

// Update category action
export const updateCategoryAction = (id, title) => async (dispatch, getState) => {
    try  {
        dispatch({type: CategoriesConstants.UPDATE_CATEGORY_REQUEST})
        await categoriesAPIs.updateCategoryService(id, title, tokenProtetion(getState))
        dispatch({type: CategoriesConstants.UPDATE_CATEGORY_SUCCESS})
        toast.success("Category updated successfully")
        dispatch(getAllCategoriesAction())
    }catch (error){
        ErrorsAction(error, dispatch, CategoriesConstants.UPDATE_CATEGORY_FAIL)
    }
}

// Delete category action
export const deleteCategoryAction = (id) => async (dispatch, getState) => {
    try  {
        dispatch({type: CategoriesConstants.DELETE_CATEGORY_REQUEST})
        await categoriesAPIs.deleteCategoryService(id, tokenProtetion(getState))
        dispatch({type: CategoriesConstants.DELETE_CATEGORY_SUCCESS})
        toast.success("Category deleted successfully")
        dispatch(getAllCategoriesAction())
    }catch (error){
        ErrorsAction(error, dispatch, CategoriesConstants.DELETE_CATEGORY_FAIL)
    }
}

