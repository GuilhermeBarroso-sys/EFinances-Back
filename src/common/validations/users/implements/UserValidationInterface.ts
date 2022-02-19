export interface UserValidationInterface {
	emailExists(email: string) : Promise<boolean>
	correctPassword(password: string, hashedPassword : string) : Promise<boolean>
}