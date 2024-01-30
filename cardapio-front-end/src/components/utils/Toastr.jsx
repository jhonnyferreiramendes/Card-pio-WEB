import toastr from "toastr";
import 'toastr/build/toastr.css';

toastr.options = {
  "closeButton": false,
  "debug": true,
  "newestOnTop": true,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": true,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}


function buildMensagemSucesso(){
    toastr['success']("Item adicionado com sucesso")
}

function buildMensagemError(){
     toastr["error"]("Erro ao adicionar item", "Error")
}

function buildMensagemSucessoDelete(){
    toastr['success']("Item removido com sucesso")
}

function buildMensagemErrorDelete(){
     toastr["error"]("Erro ao remover item")
}

function buildMensagemSucessoUpdate(){
    toastr['success']("Item editado com sucesso")
}

function buildMensagemErrorUpdate(){
     toastr["error"]("Erro ao editar item")
}

function buildMensagemGetErro() {
    toastr['error']("Codigo não encontrado");
}


export function mensagemSucesso(){
    buildMensagemSucesso();
}

export function mensagemError(){
    buildMensagemError();
}

export function mensagemSucessoDelete(){
    buildMensagemSucessoDelete();
}

export function mensagemErrorDelete(){
    buildMensagemErrorDelete();
}

export function MensagemSucessoUpdate(){
    buildMensagemSucessoUpdate();
}

export function mensagemErrorUpdate(){
    buildMensagemErrorUpdate();
}

export function mensagemGetErro(){
    buildMensagemGetErro();
}


