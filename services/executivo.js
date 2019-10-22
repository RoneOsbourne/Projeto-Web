var getIntegrantes = function() {
    var integrantes = [
      {
        id: 1,
        nome: 'Darth Vader',
        foto: 'darth_vader.jpg',
        cargo: 'Diretor Presidente',
        linkedin: 'https://www.linkedin.com/in/dart-vader-3ab0a663?trk=people-guest_profile-result-card_result-card_full-click'
      },
      {
        id: 2,
        nome: 'Axl Rose',
        foto: 'axl_rose.jpg',
        cargo: 'Diretor Comercial',
        linkedin: 'https://br.linkedin.com/in/axl-rose-guns-n-roses-362bb570?trk=people-guest_profile-result-card_result-card_full-click'
      },
      {
        id: 3,
        nome: 'Tony Stark',
        foto: 'tony_stark.jpg',
        cargo: 'Diretor de Marketing',
        linkedin: 'https://www.linkedin.com/in/tony-stark-253190138?trk=people-guest_profile-result-card_result-card_full-click'
      },
      {
        id: 4,
        nome: 'Stephen King',
        foto: 'stephen_king.jpg',
        cargo: 'Gerente de Contas',
        linkedin: 'https://www.linkedin.com/company/stephen-king?trk=people-guest_profile-result-card_result-card_full-click'
      },
      {
        id: 5,
        nome: 'Elon Musk',
        foto: 'elon_musk.jpg',
        cargo: 'Gerente Financeiro',
        linkedin: 'https://www.linkedin.com/in/elon-musk-891683177?trk=people-guest_profile-result-card_result-card_full-click'
      },
      {
        id: 5,
        nome: 'Pato Donald',
        foto: 'pato_donald.jpg',
        cargo: 'Chefe de Sessão',
        linkedin: 'https://www.linkedin.com/in/pato-donald-6aa93612/pt?trk=people-guest_profile-result-card_result-card_full-click'
      }
    ];
  
    return integrantes;

}
  
  module.exports = {
    getIntegrantes: getIntegrantes
  }