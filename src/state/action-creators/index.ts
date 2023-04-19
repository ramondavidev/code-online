import { Dispatch } from "react";
import { ActionType } from "../action-types";
import { 
    Action, 
    UpdateCellAction, 
    DeleteCellAction, 
    MoveCellAction, 
    ChangeLanguageToEn,
    ChangeLanguageToPt,
    InsertCellAfterAction as InsertCellAfterAction,
    Direction
} from "../actions";
import { CellTypes } from "../cell";
import bundle from '../../bundler';

export const updateCell = (id: string, content: string): UpdateCellAction => {
    return {
        type: ActionType.UPDATE_CELL,
        payload: {
            id, 
            content
        }
    }
};

export const deleteCell = (id: string): DeleteCellAction => {
    return {
        type: ActionType.DELETE_CELL,
        payload: id
    }
};

export const deleteAllCell = () => {
    return {
        type: ActionType.DELETE_ALL_CELL
    }
};

export const moveCell = (id: string, direction: Direction): MoveCellAction => {
    return {
        type: ActionType.MOVE_CELL,
        payload: {
            id,
            direction
        }
    }
};

export const insertCellAfter = (id: string | null, cellType: CellTypes, content: string): InsertCellAfterAction => {
    return {
        type: ActionType.INSERT_CELL_AFTER,
        payload: {
            id,
            type: cellType,
            content: content
        }
    }
};

export const changeLanguageToEn = (): ChangeLanguageToEn => {
    return {
        type: ActionType.CHANGE_TO_EN
    }
};

export const changeLanguageToPt = (): ChangeLanguageToPt => {
    return {
        type: ActionType.CHANGE_TO_PT
    }
};

export const createBundle = (cellId: string, input: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.BUNDLE_START,
            payload: {
                cellId
            }
        });

        const result = await bundle(input);

        dispatch({
            type: ActionType.BUNDLE_COMPLETE,
            payload: {
                cellId,
                bundle: result
            }
        })
    }
};