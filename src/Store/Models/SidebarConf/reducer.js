export default function SidebarConf(state =['dashboard'], action) {
 
    switch(action.type){
        case 'SET_ACTIVE_PAGE':
            return [action.page];
        default:
            return state;
    }
}