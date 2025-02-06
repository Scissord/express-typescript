"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refresh = exports.logout = exports.login = void 0;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // let { login, password, entity } = req.body;
    // 1. validation
    // const result = await validateAuth(login, password, entity);
    // if (!result.isCorrect) return res.status(400).send({ message: result.message });
    // let user = null;
    // 2. edit user by role
    // switch (entity) {
    //   case 'user':
    //     user = await getUserInfo(result.user);
    //     break;
    //   case 'webmaster':
    //     user = await User.findWebmaster(result.user.id);
    //     const webmaster_assigned_role = await getUserAssignedRole(user.id);
    //     user.abilities = webmaster_assigned_role
    //       ? await getUserAbilitiesId(user.id)
    //       : [];
    //     break;
    //   case 'operator':
    //     user = await User.findOperator(result.user.id);
    //     const operator_assigned_role = await getUserAssignedRole(user.id);
    //     user.abilities = operator_assigned_role
    //       ? await getUserAbilitiesId(user.id)
    //       : [];
    //     break;
    // };
    // 3. generate JWT TOKEN
    // console.log(`Данные user при авторизации: ${JSON.stringify(result, null, 2)}`);
    // const { accessToken, refreshToken } = generateTokens(user.id, result.user.updated_at);
    // 4. save refreshToken in DB
    // const user_token = await UserToken.findWhere({ user_id: user.id });
    // if (user_token) {
    //   await UserToken.updateWhere({ user_id: user.id }, {
    //     refresh_token: refreshToken,
    //     expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 дней
    //   });
    // } else {
    //   await UserToken.create({
    //     user_id: user.id,
    //     refresh_token: refreshToken,
    //     expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 дней
    //   });
    // };
    // 5. send cookie
    // res.cookie("refreshToken", refreshToken, {
    //   maxAge: 30 * 24 * 60 * 60 * 1000, // 30 дней
    //   httpOnly: true, // Защищает от XSS атак
    //   sameSite: "strict", // Защита от CSRF атак
    //   secure: process.env.NODE_ENV === "production" // Только в производственной среде
    // });
    // 6. make log about ip if ip not match
    // await Log.create({
    // });
    // res.status(200).send({ message: "ok", user, accessToken });
});
exports.login = login;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.cookie('refreshToken', '', { maxAge: 0 });
    // console.log('logout successfully');
    // res.status(200).send({ message: 'ok' });
});
exports.logout = logout;
const refresh = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // try {
    //   // 1. check for refreshToken
    //   const refreshToken = req.cookies.refreshToken;
    //   if (!refreshToken)
    //     return res.status(401).send({
    //       message: ERRORS.NO_REFRESH
    //     });
    //   // 2. Try to decode refreshToken
    //   try {
    //     const decodedRefresh = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    //     // 3. Check if user exist
    //     const user = await User.find(decodedRefresh.userId);
    //     if (!user)
    //       return res.status(401).send({
    //         message: ERRORS.USER_NOT_FOUND
    //       });
    //     // Преобразуем даты в миллисекунды
    //     const userUpdatedAt = new Date(user.updated_at).getTime();
    //     const tokenUpdatedAt = new Date(decodedRefresh.updated_at).getTime();
    //     // Сравниваем дату обновления пользователя с датой из токена
    //     if (userUpdatedAt > tokenUpdatedAt) {
    //       return res.status(401).send({
    //         message:
    //           'Your token is invalid because your account was updated after the token was issued. Please re-login.'
    //       });
    //     }
    //     // 4. if user exist and we get decodedRefresh, we generate JWT TOKEN
    //     const { accessToken: newAccessToken, refreshToken: newRefreshToken } = generateTokens(
    //       user.id,
    //       user.updated_at
    //     );
    //     // 5. save refreshToken in DB
    //     await UserToken.updateWhere(
    //       { user_id: user.id },
    //       {
    //         refresh_token: newRefreshToken,
    //         expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 дней
    //       }
    //     );
    //     // 6. send cookie
    //     res.cookie('refreshToken', newRefreshToken, {
    //       maxAge: 30 * 24 * 60 * 60 * 1000, // 30 дней
    //       httpOnly: true, // Защищает от XSS атак
    //       sameSite: 'strict', // Защита от CSRF атак
    //       secure: process.env.NODE_ENV === 'production' // Только в производственной среде
    //     });
    //     res.status(200).send({
    //       message: 'ok',
    //       newAccessToken
    //     });
    //   } catch (err) {
    //     // session expired
    //     res.status(401).send({
    //       message: ERRORS.SESSION_EXPIRED
    //     });
    //   }
    // } catch (err) {
    //   console.log('Error in refresh auth controller', err.message);
    //   res.status(500).send({ error: 'Internal Server Error' });
    // }
});
exports.refresh = refresh;
