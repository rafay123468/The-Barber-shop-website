// Simple countdown timers for demo
    function startCountdown(el, seconds){
      let remain = seconds;
      function tick(){
        consth = String(Math.floor(remain/3600)).padStart(2,'0');
        const m = String(Math.floor((remain%3600)/60)).padStart(2,'0');
        const s = String(remain%60).padStart(2,'0');
        el.textContent = ${h}:${m}:${s};
        if(remain>0){ remain--; setTimeout(tick,1000);} else { el.textContent = 'Ended'; }
      }
      tick();
    }
    startCountdown(document.getElementById('flashTimer'), 2*60*60); // 2 hours
    startCountdown(document.getElementById('heroTimer'), 5*60*60+30*60); // 5h30m

    // Fake data append on scroll for deals
    const deals = document.getElementById('deals');
    let seed = 100;
    deals.addEventListener('scroll', () => {
      if(deals.scrollLeft + deals.clientWidth >= deals.scrollWidth - 10){
        for(let i=0;i<3;i++){
          const el = document.createElement('article');
          el.className = 'deal';
          el.innerHTML = `
            <img src="https://picsum.photos/seed/${seed++}/600/400" loading="lazy" alt="deal"/>
            <div class=price><span class=now>$${(5+Math.random()*20).toFixed(2)}</span><span class=old>$${(20+Math.random()*40).toFixed(2)}</span></div>
            <div class=badge>⚡ ${Math.floor(Math.random()*100)}% claimed</div>
          `;
          deals.appendChild(el);
        }
      }
    });

    // Minimal interactive chips
    document.querySelectorAll('.chip').forEach(c=>{
      c.addEventListener('click',()=>{
        document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));
        c.classList.add('active');
      })
    });