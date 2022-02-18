export interface UserValidationInterface {
	emailExists(email: string) : Promise<boolean>
}