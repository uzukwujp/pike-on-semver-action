import {Request, Response} from "express";
import { reverseIp } from "../helper-function/reverse_ip";


import Address from "../models/address"

export const createAddress = async (req: Request, res: Response) => {

  const clientIp = req.ip;

  const ip = reverseIp(clientIp!)

  const address = Address.build({
    IP: ip
  })

  await address.save()

  res.status(201).send(address)
};
