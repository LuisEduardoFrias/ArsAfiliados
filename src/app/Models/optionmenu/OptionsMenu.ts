import { SubMenu } from "./SubMenu";

export class OptionsMenu{

    MenuName: string;
    RouterLink: string;
    Icon: string;
    SubMenu: SubMenu[];

    constructor(
        menuName: string,
        routerLink: string,
        icon: string,
        subMenu?: SubMenu[]
    ) {
        this.MenuName = menuName;
        this.RouterLink = routerLink;
        this.Icon = icon;
        this.SubMenu = subMenu;
    }


}