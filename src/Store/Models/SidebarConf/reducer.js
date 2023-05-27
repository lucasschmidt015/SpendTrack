export default function SidebarConf(state = [{ activePage: 'home' }], action) {
 
    switch(action.type){
        case 'SET_ACTIVE_PAGE':
            return [{ activePage: action.activePage }];
        default:
            return state;
    }
}