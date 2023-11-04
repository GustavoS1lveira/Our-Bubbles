class Usuario {
    constructor(ID, Nome, Email, Senha, ConfiguracoesAcessibilidade) {
        this.ID = ID;
        this.Nome = Nome;
        this.Email = Email;
        this.Senha = Senha;
        this.ConfiguracoesAcessibilidade = ConfiguracoesAcessibilidade;
    }

    getID() {
        return this.ID;
    }

    getNome() {
        return this.Nome;
    }

    getEmail() {
        return this.Email;
    }

    getSenha() {
        return this.Senha;
    }

    getConfiguracoesAcessibilidade() {
        return this.ConfiguracoesAcessibilidade;
    }
}

class Tarefa {
    constructor(ID, NomeTarefa, Descricao, DataCriacao, DataConclusao, Status, Prioridade, IDUsuario) {
        this.ID = ID;
        this.NomeTarefa = NomeTarefa;
        this.Descricao = Descricao;
        this.DataCriacao = DataCriacao;
        this.DataConclusao = DataConclusao;
        this.Status = Status;
        this.Prioridade = Prioridade;
        this.IDUsuario = IDUsuario;
    }

    getID() {
        return this.ID;
    }

    getNomeTarefa() {
        return this.NomeTarefa;
    }

    getDescricao() {
        return this.Descricao;
    }

    getDataCriacao() {
        return this.DataCriacao;
    }

    getDataConclusao() {
        return this.DataConclusao;
    }

    getStatus() {
        return this.Status;
    }

    getPrioridade() {
        return this.Prioridade;
    }

    getIDUsuario() {
        return this.IDUsuario;
    }
}

class Interacao {
    constructor(ID, IDUsuario, DataHoraInteracao, TipoInteracao, ConteudoInteracao, IDTarefa) {
        this.ID = ID;
        this.IDUsuario = IDUsuario;
        this.DataHoraInteracao = DataHoraInteracao;
        this.TipoInteracao = TipoInteracao;
        this.ConteudoInteracao = ConteudoInteracao;
        this.IDTarefa = IDTarefa;
    }

    getID() {
        return this.ID;
    }

    getIDUsuario() {
        return this.IDUsuario;
    }

    getDataHoraInteracao() {
        return this.DataHoraInteracao;
    }

    getTipoInteracao() {
        return this.TipoInteracao;
    }

    getConteudoInteracao() {
        return this.ConteudoInteracao;
    }

    getIDTarefa() {
        return this.IDTarefa;
    }
}

class EventoCalendario {
    constructor(ID, TituloEvento, DataHoraInicio, DataHoraFim, Marcador, Descricao, IDUsuario) {
        this.ID = ID;
        this.TituloEvento = TituloEvento;
        this.DataHoraInicio = DataHoraInicio;
        this.DataHoraFim = DataHoraFim;
        this.Marcador = Marcador;
        this.Descricao = Descricao;
        this.IDUsuario = IDUsuario;
    }

    getID() {
        return this.ID;
    }

    getTituloEvento() {
        return this.TituloEvento;
    }

    getDataHoraInicio() {
        return this.DataHoraInicio;
    }

    getDataHoraFim() {
        return this.DataHoraFim;
    }

    getMarcador() {
        return this.Marcador;
    }

    getDescricao() {
        return this.Descricao;
    }

    getIDUsuario() {
        return this.IDUsuario;
    }
}

class Grupo {
    constructor(ID, NomeGrupo, Descricao, Abas, IDUsuarioCriador, IDPermissaoConvidar, IDPermissaoInteragir, IDPermissaoEditarGrupo) {
        this.ID = ID;
        this.NomeGrupo = NomeGrupo;
        this.Descricao = Descricao;
        this.Abas = Abas;
        this.IDUsuarioCriador = IDUsuarioCriador;
        this.IDPermissaoConvidar = IDPermissaoConvidar;
        this.IDPermissaoInteragir = IDPermissaoInteragir;
        this.IDPermissaoEditarGrupo = IDPermissaoEditarGrupo;
    }

    getID() {
        return this.ID;
    }

    getNomeGrupo() {
        return this.NomeGrupo;
    }

    getDescricao() {
        return this.Descricao;
    }

    getAbas() {
        return this.Abas;
    }

    getIDUsuarioCriador() {
        return this.IDUsuarioCriador;
    }

    getIDPermissaoConvidar() {
        return this.IDPermissaoConvidar;
    }

    getIDPermissaoInteragir() {
        return this.IDPermissaoInteragir;
    }

    getIDPermissaoEditarGrupo() {
        return this.IDPermissaoEditarGrupo;
    }
}

class MembroGrupo {
    constructor(ID, IDGrupo, IDUsuario, PermissaoParaConvidar, PermissaoParaInteragir, PermissaoParaEditarGrupo) {
        this.ID = ID;
        this.IDGrupo = IDGrupo;
        this.IDUsuario = IDUsuario;
        this.PermissaoParaConvidar = PermissaoParaConvidar;
        this.PermissaoParaInteragir = PermissaoParaInteragir;
        this.PermissaoParaEditarGrupo = PermissaoParaEditarGrupo;
    }

    getID() {
        return this.ID;
    }

    getIDGrupo() {
        return this.IDGrupo;
    }

    getIDUsuario() {
        return this.IDUsuario;
    }

    getPermissaoParaConvidar() {
        return this.PermissaoParaConvidar;
    }

    getPermissaoParaInteragir() {
        return this.PermissaoParaInteragir;
    }

    getPermissaoParaEditarGrupo() {
        return this.PermissaoParaEditarGrupo;
    }
}

class Mensagem {
    constructor(ID, Conteudo, DataHoraEnvio, IDUsuarioRemetente, IDUsuarioDestinatario) {
        this.ID = ID;
        this.Conteudo = Conteudo;
        this.DataHoraEnvio = DataHoraEnvio;
        this.IDUsuarioRemetente = IDUsuarioRemetente;
        this.IDUsuarioDestinatario = IDUsuarioDestinatario;
    }

    getID() {
        return this.ID;
    }

    getConteudo() {
        return this.Conteudo;
    }

    getDataHoraEnvio() {
        return this.DataHoraEnvio;
    }

    getIDUsuarioRemetente() {
        return this.IDUsuarioRemetente;
    }

    getIDUsuarioDestinatario() {
    return this.IDUsuarioDestinatario;
    }
}

class Post {
    constructor(ID, NomeDoPost, Descricao, URL, IDUsuarioRemetente) {
        this.ID = ID;
        this.NomeDoPost = NomeDoPost;
        this.Descricao = Descricao;
        this.URL = URL;
        this.IDUsuarioRemetente = IDUsuarioRemetente;
    }

    getID() {
        return this.ID;
    }

    getNomeDoPost() {
        return this.NomeDoPost;
    }

    getDescricao() {
        return this.Descricao;
    }

    getURL() {
        return this.URL;
    }

    getIDUsuarioRemetente() {
        return this.IDUsuarioRemetente;
    }
}

// Métodos relacionados às classes

// Método para criar um novo usuário
function criarNovoUsuario(nome, email, senha, configuracoesAcessibilidade) {
    const novoUsuario = new Usuario(null, nome, email, senha, configuracoesAcessibilidade);
    // Lógica para adicionar o usuário ao banco de dados
    return novoUsuario;
}

// Método para criar uma nova tarefa
function criarNovaTarefa(nomeTarefa, descricao, status, prioridade, IDUsuario) {
    const novaTarefa = new Tarefa(null, nomeTarefa, descricao, null, null, status, prioridade, IDUsuario);
    // Lógica para adicionar a tarefa ao banco de dados
    return novaTarefa;
}

// Método para marcar um evento no calendário
function marcarEventoCalendario(tituloEvento, dataHoraInicio, dataHoraFim, marcador, descricao, IDUsuario) {
    const novoEvento = new EventoCalendario(null, tituloEvento, dataHoraInicio, dataHoraFim, marcador, descricao, IDUsuario);
    // Lógica para adicionar o evento ao banco de dados do calendário
    return novoEvento;
}

// Método para criar um novo grupo
function criarNovoGrupo(nomeGrupo, descricao, IDUsuarioCriador) {
    const novoGrupo = new Grupo(null, nomeGrupo, descricao, [], IDUsuarioCriador, null, null, null);
    return novoGrupo;
}

// Método para convidar pessoas para um grupo
function convidarPessoasParaGrupo(IDGrupo, IDUsuariosConvidados) {
}

function criarNovoPost(nomeDoPost, descricao, URL, IDUsuarioRemetente) {
    const novoPost = new Post(null, nomeDoPost, descricao, URL, IDUsuarioRemetente);
    return novoPost;
}