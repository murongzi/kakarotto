import { KeyMirror } from '../../libs/utils';
import { createAction } from 'redux-actions';
import { ApiService } from '../../libs/api.request';

// action type APP
export const HOME: any = KeyMirror({
    TEST: null,
    LIST: null
}, 'HOME');

export default {
    setTest: createAction(HOME.TEST, config => config),

    getList: createAction(HOME.LIST, async(params) => {
        const data = await ApiService({
            url: '/mock'
        });

        return data;
    })
}
