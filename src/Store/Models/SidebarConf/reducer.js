export default function SidebarConf(state =[{page: 'dashboard'}], action) {
 
    switch(action.type){
        case 'SET_ACTIVE_PAGE':
            return [action.page];
        default:
            return state;
    }
}