﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebProject01_API.Models
{
    public class HtmlContext:DbContext
    {
        public DbSet<Html> Htmls { get; set; }
        public HtmlContext(DbContextOptions<HtmlContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
