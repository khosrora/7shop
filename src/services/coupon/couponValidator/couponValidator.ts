
import IUser from './../../../components/users/model/IUser';
import ICoupon from './../../../components/coupon/model/ICoupon';
import UserHandler from './handlers/UserHandler';
import LimitHandler from './handlers/LimitHandler';
import ExpireHandler from './handlers/ExpireHandler';



class couponValidator {
    public handler(user: IUser, coupon: ICoupon) {
        const userHandler = new UserHandler();
        const limitHandler = new LimitHandler();
        const expireHandler = new ExpireHandler();
        userHandler.setNext(limitHandler).setNext(expireHandler);
        return userHandler.process(user, coupon)
    }
}
export default couponValidator;