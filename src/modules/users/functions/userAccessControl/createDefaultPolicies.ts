import { UserAccessControl } from '@prisma/client';
import {roles} from '../../json/userAccessControl/defaultRoles.json';



export function createDefaultPolicies(user_id : string) : Omit<UserAccessControl, 'id'>[] {
	const response : Omit<UserAccessControl, 'id'>[]  = [];
	Object.entries(roles).forEach((entries) => {
		const [role, permission] = entries;
		const {can_create,can_delete,can_update,can_read, isRoot} = permission;

		response.push({user_id,role_name : role, can_create,can_delete,can_update,can_read, isRoot});
	});
	return response;
	
}