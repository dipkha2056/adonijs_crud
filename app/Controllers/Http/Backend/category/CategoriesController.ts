import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

//import { HttpContextContract } from "@adonisjs/core/build/standalone";

export default class CategoriesController {

    public async index({view}:HttpContextContract){
        return view.render('backend/category/index')
    }
}
