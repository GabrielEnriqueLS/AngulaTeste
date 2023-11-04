import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { ProdutosModel } from './produtos-dash bord.model';


@Component({
  selector: 'app-produtos-dashbord',
  templateUrl: './produtos-dashbord.component.html',
  styleUrls: ['./produtos-dashbord.component.css']
})
export class ProdutosDashbordComponent implements OnInit{


  FormValue !: FormGroup;
  produtosModelObj : ProdutosModel = new ProdutosModel();
  produtosData !: any;
  

  constructor(private formbuilder: FormBuilder ,
    private api : ApiService){ }

  ngOnInit(): void{
    this.FormValue = this.formbuilder.group({
      nomeProduto : [''],
      codigoBarra : [''],
      preco : ['']
    })
    this.getAllprodutos();
  }

  
  postProdutoDetails(){
    this.produtosModelObj.nomeProduto = this.FormValue.value.nomeProduto;
    this.produtosModelObj.codBarras = this.FormValue.value.codBarras;
    this.produtosModelObj.preco = this.FormValue.value.preco;


    //erro
    this.api.postNomeProduto(this.produtosModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("Produto adicionado com sucesso")
        let ref = document.getElementById('fecha')
        this.FormValue.reset();
      }, 
      err=>{
        alert("algo deu errado")
      })
  }

  getAllprodutos(){
    this.api.getNomeProduto()
      .subscribe(res=>{
        this.produtosData = res;
      })
  }

}
