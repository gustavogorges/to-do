import { User } from "src/models/users/user"

export const users: User[] = [
	{
		"id": "joao.silva",
		"name": "João da Silva",
		"groups": [],
		"cardPermissions": [
			"Add"
		],
		"propertiesPermissions": [
			"Add"
		], 
		"senha": "123"
	},
	{
		"id": "henrique.santos",
		"name": "Henrique Santos",
		"groups": [],
		"cardPermissions": [
			"Edit"
		],
		"propertiesPermissions": [
			"Edit"
		], 
		"senha": "123"
	},
	{
		"id": "igor.oliveira",
		"name": "Igor Oliveira",
		"groups": [],
		"cardPermissions": [
			"Remove"
		],
		"propertiesPermissions": [
			"Remove"
		], 
		"senha": "123"
	},
	{
		"id": "igor.guimaraes",
		"name": "Igor Guimaraes",
		"groups": [],
		"cardPermissions": [
			"MoveCard"
		],
		"propertiesPermissions": [
			"Add",
			"Edit"
		], 
		"senha": "123"
	},
	{
		"id": "diogo.defante",
		"name": "Diogo Defante",
		"groups": [],
		"cardPermissions": [
			"Add",
			"Remove",
			"Edit",
			"MoveCard"
		],
		"propertiesPermissions": [
			"Add",
			"Edit",
			"Remove"
		], 
		"senha": "123"
	}
	
]