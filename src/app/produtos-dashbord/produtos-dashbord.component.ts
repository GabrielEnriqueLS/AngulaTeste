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


  row : any;
  FormValue !: FormGroup;
  produtosModelObj : ProdutosModel = new ProdutosModel();
  produtosData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;

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

  clickAdicionaProduto(){
    this.FormValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  
  postProdutoDetails(){
    this.produtosModelObj.nomeProduto = this.FormValue.value.nomeProduto;
    this.produtosModelObj.codBarras = this.FormValue.value.codBarras;
    this.produtosModelObj.preco = this.FormValue.value.preco;


   
    const observer = {
      next: (res: any) => {
        console.log(res);
        alert("Produto adicionado com sucesso");
        let ref = document.getElementById('fecha');
        this.FormValue.reset(); 
      },
      error: (err: any) => {
        alert("algo deu errado"); 
      }
    };
    
    
    this.api.postNomeProduto(this.produtosModelObj).subscribe(observer);
  }


  getAllprodutos(){
    this.api.getNomeProduto()
      .subscribe(res=>{
        this.produtosData = res;
      })
  }

  deleteProduto(row : any){
    this.api.deleteNomeProduto(row.id)
    .subscribe(res=>{
      alert("Produto apagado");
      this.getAllprodutos();
    })

  }

  onEdit(row: any){
    this.showAdd = false;
    this.showUpdate = true;

    this.produtosModelObj.id = row.id;
    this.FormValue.controls['Nome do produto'].setValue(row.nomeProduto);
    this.FormValue.controls['codigo de barras'].setValue(row.codBarras);
    this.FormValue.controls['preco'].setValue(row.preco);
  }

  updateProdutoDetails(){
    this.produtosModelObj.nomeProduto = this.FormValue.value.nomeProduto;
    this.produtosModelObj.codBarras = this.FormValue.value.codBarras;
    this.produtosModelObj.preco = this.FormValue.value.preco;

    this.api.updateNomeProduto(this.produtosModelObj, this.produtosModelObj.id)
      .subscribe(res=>{
        alert("Atualizado com sucesso");
        let ref = document.getElementById('fecha');
        this.FormValue.reset(); 
      })
  }


}
