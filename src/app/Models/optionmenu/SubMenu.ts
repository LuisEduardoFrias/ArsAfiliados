export class SubMenu{
   
    MenuName: string;
    RouterLink: string;
    Icon: string;

    constructor(
        menuName: string,
        routerLink: string,
        icon: string
    ) {
        this.MenuName = menuName;
        this.RouterLink = routerLink;
        this.Icon = icon;
    }
}