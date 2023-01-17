# dietku-backend
### Installation
```
npm install
```

### Create Database
```
npx sequelize db:create
```

### Migrate database
```
npx sequelize db:migrate
```

### Seeds into database
```
npx sequelize db:seed
```

### Running
```
npm run dev
```
running at server ```http://localhost:3000```
## API Endpoints

| Method | Endpoint         | Description           | Additional Info         |
| ------ | ---------------- | --------------------- | ----------------------- |
| POST   | /auth/login      | Login                 |                         |
| POST   | /auth/register   | Register              |                         |
| GET    | /users           | Get all data users    |                         |
| GET    | /users/:id_user  | Get a data user by id |                         |
| POST   | /users/:id_user  | Create a data user    | Requires Authentication |
| PUT    | /users/:id_user  | Update a data user    | Requires Authentication |
| DELETE | /users/:id_user  | Delete a data user    | Requires Authentication |
| GET    | /foods/          | Get all data foods    |                         |
| GET    | /foods/:id_foods | Get a data food by id |                         |
| POST   | /foods           | Create a data food    | Requires Authentication |
| PUT    | /foods/:id_foods | Update a data food    | Requires Authentication |
| POST   | /foods/:id_foods | Delete a data food    | Requires Authentication |
| GET    | /diets/          | Get all data diets    |                         |
| GET    | /diets/:id_diets | Get a data diet by id |                         |
| POST   | /diets           | Create a data diet    | Requires Authentication |
| PUT    | /diets/:id_diets | Update a data diet    | Requires Authentication |
| POST   | /diets/:id_diets | Delete a data diet    | Requires Authentication |

