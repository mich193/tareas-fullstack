//tabla users
create table users (
  id serial primary key,
  username varchar(50) not null,
  email varchar(255) not null unique,
  password varchar(255) not null,
  created_at timestamp not null default now() 
);

//tabla tasks
create table tasks (
  id serial primary key,
  title varchar(150) not null,
  description text,
  due_date date,
  user_id integer not null references users(id) on dlete cascade,
  created_at timestamptz not null default now()
);

//seguridad

alter table users enable row lever security;
alter table tasks enable row lever security;
