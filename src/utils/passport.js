const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const {
  clientes,
  fornecedores,
  transportadora,
  gestor,
  fielarmazem,
  plataforma,
} = require("../database/models");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(options, async function (jwt_payload, done) {
    console.log("Payload do Token:", jwt_payload);
    try {
      let userResult;
      const tables = [
        clientes,
        fornecedores,
        transportadora,
        // gestor,
        // fielarmazem,
        // plataforma,
      ];

      for (let table of tables) {
        userResult = await table.findOne({
          where: { tokenIdentifier: jwt_payload.tokenIdentifier },
        });
        if (userResult) break;
      }

      if (userResult) {
        return done(null, userResult);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);

module.exports = passport;
