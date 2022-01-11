using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebProject01_API.Models;

namespace WebProject01_API.Repositories
{
    public class HtmlRepository
    {
        private readonly HtmlContext _context;

        public HtmlRepository(HtmlContext context)
        {
            _context = context;
        }

        public async Task<Html> Create(Html htmlToList)
        {
            _context.Htmls.Add(htmlToList);
            await _context.SaveChangesAsync();

            return htmlToList;
        }

        public async Task Delete(int id)
        {
            var htmlToDelete = await _context.Htmls.FindAsync(id);
            _context.Htmls.Remove(htmlToDelete);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Html>> Get()
        {
            return await _context.Htmls.ToListAsync();
        }

        public async Task<Html> Get(int id)
        {
            return await _context.Htmls.FindAsync(id);
        }

        public async Task Update(Html html)
        {
            _context.Entry(html).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
