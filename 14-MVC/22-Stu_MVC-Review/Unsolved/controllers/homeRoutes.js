const { User } = require('../../../17-Ins_Session-Storage/models');

const router = require('express').Router();

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
  try {
    const users = await User.findAll({
      order: [
        ['name', 'ASC']
      ],
      attributes: {
        exclude: ['password']
      }
    })
  }
  res.render('homepage');
});

module.exports = router;
