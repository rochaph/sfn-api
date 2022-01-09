import { Router } from "express";

export default interface Controller {
  namespace: string;
  Router: Router;
}
