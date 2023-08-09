import { CartRepository } from "../cart-repository";
import { UseCase } from "../../../common/domain/use-case";
import { Product } from "../../../product/domain/product";

export class AddProductToCartUseCase implements UseCase<Product> {
  constructor(private readonly cartRepo: CartRepository) {}

  async handle(product: Product): Promise<void> {
    const cart = await this.cartRepo.get();
    const updatedCart = cart.addProduct(product);
    await this.cartRepo.save(updatedCart);
  }
}
