import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL = 'https://rvyburmmzmficbdcukgx.supabase.co';
const SUPABASE_KEY = 'sb_publishable_k0atUdKat3rhKTZzjViTDw_ija8yVZO';

class Game {
  constructor(name) {
    const client = createClient(SUPABASE_URL, SUPABASE_KEY);

    this.name = name;
    this.channel = client.channel('codeo', {
      config: {
        presence: {
          key: name,
        }
      }
    }).subscribe(async status => {
      await this.channel.track(); 
    });
  }

  click() {
    this.channel.send({
      type: 'broadcast',
      event: 'click',
      payload: { name: this.name },
    });
  }
}

export default Game;