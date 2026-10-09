CREATE TABLE `portfolio_cases` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slug` varchar(180) NOT NULL,
	`title` varchar(255) NOT NULL,
	`kicker` text NOT NULL,
	`summary` text NOT NULL,
	`context` text NOT NULL,
	`role` varchar(255) NOT NULL,
	`methods` text NOT NULL,
	`outcomes` text NOT NULL,
	`tags` text NOT NULL,
	`cover` varchar(120) NOT NULL DEFAULT 'protest',
	`link` varchar(1024),
	`featured` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `portfolio_cases_id` PRIMARY KEY(`id`),
	CONSTRAINT `portfolio_cases_slug_unique` UNIQUE(`slug`)
);
