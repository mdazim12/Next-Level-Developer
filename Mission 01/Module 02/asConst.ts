// as const asseration

// enum userRole {
//     Admin = 'Admin',
//     Editor = 'Editor',
//     Viewer = 'Viewer',
// }

const UserRoles = {
    Admin : 'Admin',
    Editor : 'Editor',
    Viewer : 'Viewer',
} as const;

// UserRoles.Admin = 'mon caitese';


// {
//  readonly Admin : 'Admin',
//  readonly  Editor : 'Editor',
//  readonly  Viewer : 'Viewer',

// }




const canEdit = (role : (typeof UserRoles)  [keyof typeof UserRoles]) => {
    if(role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else return false;
};


const isEditPermisbale = canEdit(UserRoles.Admin)

console.log(isEditPermisbale)