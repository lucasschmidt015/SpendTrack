export default function SidebarConf(state = [{ activePage: 'home', sidebarActive: false }], action) {
 
    switch(action.type){
        case 'SET_ACTIVE_PAGE':
            return [{ activePage: action.activePage, sidebarActive: state[0].sidebarActive }];
        case 'SET_SIDEBAR_ACTIVE':
            return [{ activePage: state[0].activePage, sidebarActive: !state[0].sidebarActive }];            
        default:
            return state;
    }
}