import CouponHandler from './CouponHandler';
import ICoupon from './../../../components/coupon/model/ICoupon';
import IUser from './../../../components/users/model/IUser';



abstract class abstractCouponHandler implements CouponHandler {

    private nextHandler: CouponHandler;

    public setNext(handler: CouponHandler): CouponHandler {
        this.nextHandler = handler;
        return handler;
    }

    public process(user: IUser, coupon: ICoupon): ICoupon | null {
        if (this.nextHandler) {
            return this.nextHandler.process(user, coupon);
        }
        return null;
    }

}

export default abstractCouponHandler;