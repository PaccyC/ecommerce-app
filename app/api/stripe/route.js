import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const cartItems = await req.json();
    console.log(cartItems);

    const line_items = cartItems.map((item) => {
      const img=item.image[0].asset._ref;
      const newImage= img.replace('image-','https://cdn.sanity.io/images/srq55yft/production/').replace("-webp",".webp");
      console.log("IMAGE",newImage);


      return {
        price_data:{
            currency:"eur",
            product_data: {
                name:item.name,
                images:[newImage],

            },
            unit_amount:item.price * 100,
        },
        adjustable_quantity:{
            enabled:true,
            minimum:1
        },
        quantity:item.quantity,
      }
    });

    const session = await stripe.checkout.sessions.create({
      submit_type: 'pay',
      mode: 'payment',
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      shipping_options: [
        { shipping_rate: 'shr_1PmrzwINbZneszw1Sz9BubSd' },
      ],
      line_items,
      success_url: `${req.headers.get('origin')}/success`,
      cancel_url: `${req.headers.get('origin')}/canceled`,
    });

    return NextResponse.json({ id: session.id });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
