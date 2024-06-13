import {Router} from "express";

import { createAddress } from "../controllers/create-address";

const createAddressRouter = Router();

createAddressRouter
.post('/address',
 createAddress
 )

export default createAddressRouter;





